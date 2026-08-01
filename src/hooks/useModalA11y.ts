import { useEffect, useRef, useState } from 'react';

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Shared modal/drawer behavior: locks page scroll, moves focus into the
 * modal on open, traps Tab navigation inside it, and restores focus to the
 * trigger element on close. Attach `containerRef` to the modal's outer node.
 *
 * The trigger element is captured during render (not in an effect) because
 * an autoFocus element inside the modal steals document.activeElement
 * before any useEffect runs, which would otherwise make the hook "restore"
 * focus to the modal's own contents instead of the element that opened it.
 */
export function useModalA11y<T extends HTMLElement>(isOpen: boolean) {
  const containerRef = useRef<T>(null);
  // Lazy initializer runs synchronously during the first render, before
  // commit/mount — so it captures the trigger element before any autoFocus
  // inside the modal has a chance to steal document.activeElement.
  const [previouslyFocused] = useState<HTMLElement | null>(() =>
    isOpen ? (document.activeElement as HTMLElement) : null
  );

  useEffect(() => {
    if (!isOpen) return;

    const container = containerRef.current;

    const bodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusFirst = () => {
      const focusable = container?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      (focusable?.[0] ?? container)?.focus();
    };
    focusFirst();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !container) return;
      const focusable = Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
        (el) => el.offsetParent !== null
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = bodyOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [isOpen, previouslyFocused]);

  return containerRef;
}

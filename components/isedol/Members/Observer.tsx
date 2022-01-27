import { useEffect, useState } from "react";
import { IsedolMemberID } from "../../../structs/member";

export const useIntersectionObserver = (
  target: React.RefObject<HTMLDivElement>,
  selector: string,
  active: boolean,
  onIntersect?: (id: IsedolMemberID | null) => void
): void => {
  const [observer, setObserver] = useState<IntersectionObserver>(null!);

  useEffect(() => {
    if (!process.browser) {
      return;
    }

    const localObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          (entry.target as HTMLElement).dataset.active = `${entry.isIntersecting}`;

          if (entry.isIntersecting) {
            onIntersect &&
              onIntersect(
                (entry.target as HTMLElement).dataset.member as IsedolMemberID
              );
          }
        });
      },
      {
        root: target.current,
        threshold: 0.5,
      }
    );

    setObserver(localObserver);

    return () => {
      localObserver.disconnect();
    };
  }, [onIntersect, target]);

  useEffect(() => {
    if (!active) {
      onIntersect && onIntersect(null);

      return;
    }

    if (!observer) return;

    const childTargets = target.current!.querySelectorAll(selector);
    childTargets.forEach(child => observer.observe(child));

    return () => {
      observer.disconnect();
    };
  }, [active, observer, onIntersect, target, selector]);
};

import scrollIntoView from 'smooth-scroll-into-view-if-needed';

export const scrollElementSmooth = (
  element: Element | null,
  block = 'start',
) => {
  if (!element) {
    return;
  }
  scrollIntoView(element, {
    // scrollMode: 'if-needed',
    block,
    inline: 'nearest',
  });
};

export const scrollTopSmooth = () => {
  const header = document.querySelector('.antialiased');
  scrollElementSmooth(header);
};

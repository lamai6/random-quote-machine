import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          content:
            'Make the most of yourself, for that is all there is of you.',
          author: 'Ralph Waldo Emerson',
        }),
    })
  );

  global.waitMs = (ms) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
});

describe('App component tests', () => {
  it('should change background color when mounting', async () => {
    const { container } = render(<App />);
    await global.waitMs(500);

    const pageContainer = container.querySelector('div[id=container]');

    expect(pageContainer.style).toHaveProperty('backgroundColor');
    expect(pageContainer.style.backgroundColor).not.toBe('rgb(255, 255, 255)');
  });

  it('should change background color when clicking on button', async () => {
    const { container, findByRole } = render(<App />);
    await global.waitMs(500);

    let pageContainer = container.querySelector('div[id=container]');
    const prevBgColor = pageContainer.style.backgroundColor;

    const newQuoteButton = await findByRole('button', { name: 'New quote' });
    fireEvent.click(newQuoteButton);
    await global.waitMs(500);
    pageContainer = container.querySelector('div[id=container]');
    const nextBgColor = pageContainer.style.backgroundColor;

    expect(pageContainer.style).toHaveProperty('backgroundColor');
    expect(prevBgColor).not.toBe(nextBgColor);
  });
});

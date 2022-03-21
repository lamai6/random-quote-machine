import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuoteBox from './QuoteBox';

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
});

describe('QuoteBox component tests', () => {
  it('should generate quote when component is mounted', async () => {
    const { container, findByRole } = render(<QuoteBox />);
    const quote = await findByRole('heading');
    const author = container.querySelector('span[id=author]');

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(quote).toHaveTextContent(/Make the most/);
    expect(author).toHaveTextContent('Ralph Waldo Emerson');
  });

  it('should update quote when clicking on button', async () => {
    const { container, findByRole } = render(<QuoteBox />);
    const newQuoteButton = await findByRole('button', { name: 'New quote' });

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            content: 'They can do all because they think they can.',
            author: 'Virgil',
          }),
      })
    );

    fireEvent.click(newQuoteButton);
    const quote = await findByRole('heading');
    const author = container.querySelector('span[id=author]');

    expect(quote).toHaveTextContent(/They can do/);
    expect(author).toHaveTextContent('Virgil');
  });
});

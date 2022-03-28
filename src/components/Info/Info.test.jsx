import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Info from './Info';

describe('App component tests', () => {
  it('should change background color when mounting', async () => {
    const { container } = render(<Info />);

    const projectInfo = container.querySelector('p');

    expect(projectInfo).toHaveTextContent(/You can find the GitHub repository/);
  });
});

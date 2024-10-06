import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import {UserSearch}  from './UserSearch';

describe('UserSearch Component', () => {
  const onSearchMock = jest.fn();

  test('renders input and button', () => {
    render(<UserSearch onSearch={onSearchMock} />);

    const input = screen.getByPlaceholderText(/введите имя/i);
    const button = screen.getByText(/поиск/i);

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('calls onSearch when button is clicked', () => {
    render(<UserSearch onSearch={onSearchMock} />);

    const input = screen.getByPlaceholderText(/введите имя/i);
    fireEvent.change(input, { target: { value: 'Doe' } });
    
    const button = screen.getByText(/поиск/i);
    fireEvent.click(button);

    expect(onSearchMock).toHaveBeenCalledWith('Doe');
  });
});

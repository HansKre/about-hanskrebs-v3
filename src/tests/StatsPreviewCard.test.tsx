import {render, screen} from '@testing-library/react';
import MarginsLeftRight from '../components/MarginsLeftRight';

describe('<StatsPreviewCard />', () => {
  it('should render header text', () => {
    render(<MarginsLeftRight ><h1>foo</h1></MarginsLeftRight>);
    expect(screen.getByText(/Get/i)).toBeInTheDocument();
    expect(screen.getByText(/insights/i)).toBeInTheDocument();
    expect(screen.getByText(/that help your business grow./i)).toBeInTheDocument();
  });
});

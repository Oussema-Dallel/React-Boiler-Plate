import App from './App';
import { render } from './utils/testUtils';

describe('<App />', () => {
	it('should render', () => {
		const { container } = render(<App />);

		expect(container).toBeInTheDocument();
	});
});
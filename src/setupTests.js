import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { notify } from 'react-notify-toast';
import Notify from 'utils/notifications';

configure({ adapter: new Adapter() });
global.fetch = require('fetch-mock').sandbox();

global.fetch.get('*', []);

global.Notify = Notify;
notify.show = jest.fn();

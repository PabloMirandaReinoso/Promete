import Index from 'components/dashboard/Activity.jsx';
import Index from 'components/dashboard/ActivityDetails.jsx';
import Index from 'components/dashboard/Ideas.jsx';
import Index from 'components/dashboard/Navigator.jsx';
import Index from 'components/dashboard/index.jsx';
import Fetch from 'components/services/fetch.jsx';

const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
root.render(<Index/>);

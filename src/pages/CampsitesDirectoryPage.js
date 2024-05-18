import { Container } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';

const CampsitesDirectoryPage = () => {
    // const [selectedCampsite, toggleCampsite] = useState(selectRandomCampsite())
    return (
        <Container>
            <CampsitesList />
        </Container>
    );
};

export default CampsitesDirectoryPage;
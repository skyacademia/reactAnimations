import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { Card, Col } from 'react-bootstrap';
function FilterSearch({ filterList }) {
    let gnereFilter = [];
    let dateFilter = [];
    let ageFilter = [];

    for (let i = 0; i < filterList.장르.length; i++) {
        gnereFilter.push(<><div className="filterItem"><ImCheckboxUnchecked className='checkbox' />{filterList.장르[i]}</div></>);
    }
    for (let i = 0; i < filterList["방영 일자"].length; i++) {
        dateFilter.push(<><div className="filterItem"><ImCheckboxUnchecked className='checkbox' />{filterList["방영 일자"][i]}</div></>);
    }
    for (let i = 0; i < filterList.시청연령.length; i++) {
        ageFilter.push(<><div className="filterItem"><ImCheckboxUnchecked className='checkbox' />{filterList.시청연령[i]}</div></>);
    }

    return (
        <>
            <Col sm={2}>
                <Card className='filterCategory'>
                    <Card.Body>
                        <Card.Title>장르</Card.Title>
                        {gnereFilter}
                    </Card.Body>
                </Card>
                <Card className='filterCategory'>
                    <Card.Body>
                        <Card.Title>방영날짜</Card.Title>
                        {dateFilter}
                    </Card.Body>
                </Card>
                <Card className='filterCategory'>
                    <Card.Body>
                        <Card.Title>나이</Card.Title>
                        {ageFilter}
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}
export default FilterSearch;
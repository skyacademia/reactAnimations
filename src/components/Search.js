import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios'

import ListViewer from './ListViewer';
import FilterSearch from './FilterSearch';

function Search(props) {
    let [filterList, setFilterList] = useState({ "장르": [], "방영 일자": [], "시청연령": [] });
    useEffect(() => {
      axios.get('/search').then((result) => {
        let copy = result.data;
        let filterListCopy = { ...filterList };
  
        copy.forEach((animation) => {
          if (filterListCopy.장르.includes(animation.genre1) === false) {
            filterListCopy.장르.push(animation.genre1);
          }
          if (animation.genre2 !== null && filterListCopy.장르.includes(animation.genre2) === false) {
            filterListCopy.장르.push(animation.genre2);
          }
          let date = animation.opening_year + "년 " + animation.opening_quarter + "분기";
          if (filterListCopy["방영 일자"].includes(date) === false) {
            filterListCopy["방영 일자"].push(date);
          }
          let age = animation.age === "ALL" ? "전체이용가" : animation.age + "세";
          if (filterListCopy.시청연령.includes(age) === false) {
            filterListCopy.시청연령.push(age);
          }
        })
        filterListCopy.장르.sort((a, b) => { return a - b > 0 });
        filterListCopy["방영 일자"].sort((a, b) => { return a - b < 0 });
        filterListCopy.시청연령.sort((a, b) => { return a - b > 0 });

        console.log(filterListCopy);
        props.setAnimations(copy);
        setFilterList(filterListCopy);
      });
    }, [props.setAnimations]);
    return (
      <>
        <Container>
          <Row>
            <FilterSearch filterList={filterList} setFilterList={setFilterList}></FilterSearch>
            <Col sm={10}><ListViewer animations={props.animations}></ListViewer></Col>
          </Row>
        </Container>
      </>
    )
  }

  export default Search;
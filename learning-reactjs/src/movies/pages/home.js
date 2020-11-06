import React, { useState, useEffect } from 'react';

import { Row,Col,Pagination } from 'antd';
import LayoutComponent from '../components/layout'
import {getDataMovies} from '../services/api';
import LoadingData from '../components/loading-data';
import ListMoviesView from '../components/list-movies'



const HomePage = () => {

  const [loadingHome,setLoadingHome]=useState(false);
  const [movies,setMovies]=useState([]);
  const [totalItems,setTotalItems]=useState(0);
  const [page,setPage]=useState(1);

  useEffect(() => {
    const getData=async() => {
      setLoadingHome(true);
      const data = await getDataMovies(page);
      if(data){
        setMovies(data.results);
        setTotalItems(data.total_results);
        if(page<1){
          setPage(1);
        }else if(page>data.total_pages){
          setPage(data.total_pages)
        }
        setLoadingHome(false);
      }
    }
    getData();
  },[page])

  if(loadingHome || movies.length===0){
    return (
      <LayoutComponent>
        <LoadingData/>
      </LayoutComponent>
    )
  }

  const changePage = (pages) => {
    setPage(pages);
  }

  return (
    <LayoutComponent>
      <ListMoviesView movies={movies}/>
      <Row style={{marginTop:'20px',textAlign:'center'}}>
        <Col span={24}>
          <Pagination 
            current={page}
            pageSize={20}
            total={totalItems}
            onChange={(pages) => changePage(pages)}
          >
          </Pagination>
        </Col>
      </Row>
    </LayoutComponent>
  )
}
export default React.memo(HomePage)
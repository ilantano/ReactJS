import React ,{useState, useEffect} from 'react';
import {Row,Col,Pagination} from 'antd';
import LayoutComponent from '../components/layout'
import {getDataNewFilm} from '../services/api';
import LoadingData from '../components/loading-data';
import ListMoviesView from '../components/list-movies'



const NewFilmPage = () => {

  const [loadingNewFilm,setLoadingNewFilm]=useState(false);
  const [movies,setMovies]=useState([]);
  const [totalItems,setTotalItems]=useState(0);
  const [page,setPage]=useState(1);

  useEffect(() => {
    const getDataNew = async () => {
      setLoadingNewFilm(true);
      const data = await getDataNewFilm(page);
      if(data) {
        setMovies(data.results);
        setTotalItems(data.total_pages);
        if(page<1){
          setPage(1);
        }else if(page>data.total_pages){
          setPage(data.total_pages);
        }
      }
      setLoadingNewFilm(false);
    }
    getDataNew();
  })

  if(loadingNewFilm || movies.length===0){
    return (
      <LayoutComponent>
        <LoadingData/>
      </LayoutComponent>
    )
  }
  const changePage =() =>{
    setPage(page)
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
export default React.memo(NewFilmPage)
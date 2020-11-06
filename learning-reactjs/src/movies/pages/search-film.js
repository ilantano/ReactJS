import React, {useState} from 'react';
import {Row,Col,Input, Pagination} from 'antd';
import LayoutComponent from '../components/layout';
import {searchMovieByKeywords} from '../services/api';
import LoadingData from '../components/loading-data';
import ListMoviesView from '../components/list-movies'


const { Search } = Input;

const SearchFilmPage = () => {

  const [loadingSearch,setLoadingSearch] = useState(false);
  const [page,setPage]=useState(1);
  const [totalItems,setTotalItems]=useState(0);
  const [keyword,setKeyWord]=useState('');
  const [listMovies,setListMovies]=useState([]);

  const changeInput =(event) => {
    const val = event.target.value;
    setKeyWord(val);
  }

  const searchMovies = async (keywords = '', currentPage = 1) => {
    if(keywords.length >0){
      setLoadingSearch(true);
      const data = await searchMovieByKeywords(keywords, currentPage);
      if(data){
        setListMovies(data.results);
        setTotalItems(data.total_results);
        setPage(currentPage);
        setLoadingSearch(false);
        window.scrollTo(0, 0);
      }
    }
  }

  if(loadingSearch && listMovies.length===0){
    return (
      <LayoutComponent>
        <LoadingData/>
      </LayoutComponent>
    )
  }

  

  return (
    <LayoutComponent >
      <ListMoviesView movies={listMovies}/>
      <Row style={{marginTop:'20px', marginBottom:'20px'}}>
        <Col span={12} offset={6}>
          <Search 
            placeholder="input search text" 
            onSearch={(val) => searchMovies(val,page)}
            enterButton 
            onChange={changeInput}
            value={keyword}
          />
        </Col>
      </Row>
      {/* phan trang */}
      {listMovies.length >0 && (
          <Row style={{marginTop:'20px',textAlign:'center'}}>
          <Col span={24}>
            <Pagination 
              current={page}
              pageSize={20}
              total={totalItems}
              onChange={(pages) => searchMovies(keyword,pages)}
            >
            </Pagination>
          </Col>
        </Row>
      )}
    </LayoutComponent>
  )
}
export default React.memo(SearchFilmPage)
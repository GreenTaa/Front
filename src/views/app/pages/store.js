import React, {useEffect, Component, Fragment, useState} from "react";
import {
    UncontrolledDropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    Row
  } from "reactstrap";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import CustomNavbar from '../../../components/CustomNavbar'
import CardStore from './CardStore';
import {fetchProducts, addProduct, deleteProduct, updateProduct} from '../../../components/redux/products/productActions'
import { fetchSupporters, FetchSupporter } from "../../../components/redux/supporters/suppActions";
import Pagination   from './pagination';

const ImageListView = ({ }) => {
    var [productLiked, setProductLiked] = useState()
    const dispatch = useDispatch()
    const productsData = useSelector((state) => state.products)
    const [supporter,setSupporter] = useState();
    const [connected, setConnected] = useState(false);
    const team = localStorage.getItem("Team");
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = productsData.products.filter(product => product.Team == team).slice(indexOfFirstPost, indexOfLastPost);
    const currentPostsFiltred = productsData.products.filter(product => product.Team == team).filter(product => product).slice(indexOfFirstPost, indexOfLastPost);            
    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [ ]);  
    var category = productsData.products.map(product => product.Category)
    var category1 = category.filter((value, index) => category.indexOf(value) === index) 
    var [option, setOption] = useState();
    var [selected, setSelected] = useState(false);
        return (
            <>
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus"/>
            <>
            <img src="http://res.cloudinary.com/dkqbdhbrp/image/upload/v1630597218/teams/ordflpx7kuhlwj5ahkwb.jpg" width="1550px" height="700px" style={{marginBottom: "80px"}}/>
            <div className="container">
            <div className="container" style={{marginBottom: "50px"}}>
                <h2>{team} Store</h2>
                <div className="dropdown">
                <button className="btn_get btn_hover" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Filter by Category
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" onClick={() => (setSelected(false))}>All Categories</a> 
                {category1.map((option, index) => { 
                    return  ( <a className="dropdown-item" key={index} value={option} onClick={() =>( /* showProductsByCategory({option}),  */ console.log("Posts =  " + team), setSelected(true), setOption(option) )}>{option}</a> )   
                })}
                </div>
            </div>
            </div>
            <hr style={{marginTop : "-10px", marginBottom: "50px"}}></hr>
            
            {selected? 
            <>
           <center>
            <Row>
            { productsData.products.filter(product => product.Team == team).filter(product => product.Category == option).slice(indexOfFirstPost, indexOfLastPost).map(product =>
                <CardStore key={product._id} product={product}   />  
            )}
           </Row>
           <div className="container text-center">
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={productsData.products.filter(product => product.Team == team).filter(product => product.Category == option).length}
                paginate={paginate}
                /></div>
          
           </center>
            </>
            : 
            <>
            <center>
            <Row>
            { currentPosts.map(product =>
                <CardStore key={product._id} product={product}   />  
            )}
           </Row>
           <div className="container text-center">
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={productsData.products.filter(product => product.Team == team).length}
                paginate={paginate}
                /></div>
          
           </center>
            </>}
            
            </div>
        </>
        </>
        )
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(ImageListView);

/*  import React, {useState, Component, Fragment, useEffect} from "react";
import { Row } from "reactstrap";
import axios from "axios";
import { servicePath } from "../../../constants/defaultValues";
import FooterTwo from '../../../components/Footer/FooterTwo';
import FooterData from '../../../components/Footer/FooterData';
import DataListView from "../../../containers/pages/DataListView";
import Pagination from "../../../containers/pages/Pagination";
import ContextMenuContainer from "../../../containers/pages/ContextMenuContainer";
import ListPageHeading from "../../../containers/pages/ListPageHeading";
import ImageListView from "../../../containers/pages/ImageListView";
import ThumbListView from "../../../containers/pages/ThumbListView";
import {fetchProducts, addProduct, deleteProduct, updateProduct} from '../../../components/redux/products/productActions'
import CustomNavbar from '../../../components/CustomNavbar'
import { useDispatch, useSelector } from 'react-redux';
import Produits from './produits'
import mouseTrap from "react-hook-mousetrap";


function ThumbListPages () {
    useEffect(() => {
        dataListRender();
        mouseTrap.bind(["ctrl+a", "command+a"], () =>
          handleChangeSelectAll(false)
        );
        this.mouseTrap.bind(["ctrl+d", "command+d"], () => {
          setselectedItems([]);
          return false;
        });
        return () => {
        mouseTrap.unbind("ctrl+a");
        mouseTrap.unbind("command+a");
        mouseTrap.unbind("ctrl+d");
        mouseTrap.unbind("command+d");
        }
    }, []);

function collect(props) {
  return { data: props.data };
}
const apiUrl = servicePath + "/cakes/paging";
      var [displayMode, setdisplayMode] = useState=("imagelist");
      var [selectedPageSize, setselectedPageSize] = useState(8);
      var [orderOptions, setorderOptions] = useState({ column: "title", label: "Product Name" },
      { column: "category", label: "Category" },
      { column: "status", label: "Status" });
      var [pageSizes, setpageSizes] = useState ([8, 12, 24]);

      var [categories, setcategories] = useState ({ label: "Cakes", value: "Cakes", key: 0 },
        { label: "Cupcakes", value: "Cupcakes", key: 1 },
        { label: "Desserts", value: "Desserts", key: 2 })

      var [selectedOrderOption, setselectedOrderOption] = useState=({ column: "title", label: "Product Name" });
      var [dropdownSplitOpen, setdropdownSplitOpen] = useState=(false);
      var [modalOpen, setmodalOpen] = useState (false);
      var [currentPage, setcurrentPage]= useState (1);
      var [totalItemCount, settotalItemCount] = useState(0);
      var [totalPage, settotalPage] = useState(1);
      var [search, setsearch]= useState();
      var [selectedItems, setselectedItems]= useState([]);
      var [lastChecked, setlastChecked] = useState (null);
      var [isLoading, setisLoading]= useState (false);



    const toggleModal = () => {
        setmodalOpen(!modalOpen)
        
      };
    
    const changeOrderBy = column => {
        setselectedOrderOption(setorderOptions.find(
              x => x.column === column
            ));
          dataListRender()
      };
    const changePageSize = size => {
        setselectedPageSize( size);
        setcurrentPage (1);
          dataListRender()
      };
    const  changeDisplayMode = mode => {

          setdisplayMode(mode);
        return false;
      };
    const  onChangePage = page => {
            setcurrentPage (page);
          dataListRender()
      };
    
    const  onSearchKey = e => {
        if (e.key === "Enter") {
              setsearch (e.target.value.toLowerCase());
            dataListRender()
        }
      };
    
    const  onCheckItem = (event, id) => {
        if (
          event.target.tagName === "A" ||
          (event.target.parentElement && event.target.parentElement.tagName === "A")
        ) {
          return true;
        }
        if (lastChecked === null) {
          
            setlastChecked(id)
          
        }
    
        setselectedItems(selectedItems);
        if (selectedItems.includes(id)) {
          setselectedItems(selectedItems.filter(x => x !== id));
        } else {
          selectedItems.push(id);
        }
        setselectedItems(selectedItems);
    
        if (event.shiftKey) {
          var items = items;
          var start = getIndex(id, items, "id");
          var end = getIndex(lastChecked, items, "id");
          items = items.slice(Math.min(start, end), Math.max(start, end) + 1);
          selectedItems.push(
            ...items.map(item => {
              return item.id;
            })
          );
          selectedItems = Array.from(new Set(selectedItems));
          setselectedItems(selectedItems)
        }
        document.activeElement.blur();
      };
    
    const  getIndex = (value, arr, prop) => {
        for (var i = 0; i < arr.length; i++) {
          if (arr[i][prop] === value) {
            return i;
          }
        }
        return -1;
      }
    const  handleChangeSelectAll = isToggle => {
        if (selectedItems.length >= items.length) {
          if (isToggle) {
              setselectedItems([]);
          }
        } else {
              setselectedItems(items.map(x => x.id));
        }
        document.activeElement.blur();
        return false;
      };
    
    const  dataListRender = () => {
        const state = {
          selectedPageSize,
          currentPage,
          selectedOrderOption,
          search
        } ;
        axios
          .get(
            `${apiUrl}?pageSize=${selectedPageSize}&currentPage=${currentPage}&orderBy=${
              selectedOrderOption.column
            }&search=${search}`
          )
          .then(res => {
            return res.data;
          })
          .then(data => {

              settotalPage (data.totalPage);
              items = data.data;
              setselectedItems( []);
              settotalItemCount(data.totalItem);
              setisLoading (true);
            
          });
      }
    
    const  onContextMenuClick = (e, data, target) => {
        console.log(
          "onContextMenuClick - selected items",
          selectedItems
        );
        console.log("onContextMenuClick - action : ", data.action);
      };
    
    const  onContextMenu = (e, data) => {
        const clickedProductId = data.data;
        if (!selectedItems.includes(clickedProductId)) {
            setselectedItems([clickedProductId]);
        }
        return true;
      };

    const Supp = () => {
        console.log("entreeeeeed oiuhg")
        if(localStorage.getItem('id') === null){
          return false
        }
        else {
        axios.get("http://localhost:3000/supporters/"+localStorage.getItem('id'))
        .then(function(doc){
          {
              return true
          }
        })
      }
      }
      const state = {
      currentPage,
      items,
      displayMode,
      selectedPageSize,
      totalItemCount,
      selectedOrderOption,
      selectedItems,
      orderOptions,
      pageSizes,
      modalOpen,
      categories
      };
      const { match } = props;
      const startIndex = (currentPage - 1) * selectedPageSize;
      const endIndex = currentPage * selectedPageSize;
  
      return  (
        
        <div>
          <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus"/>
          {Supp ? 
          <div>
          <img src="http://res.cloudinary.com/dkqbdhbrp/image/upload/v1630597218/teams/ordflpx7kuhlwj5ahkwb.jpg" width="1550px" height="700px" />
          <br></br>
          <br></br>
          <Fragment >
          <div className="disable-text-selection container">  
          
            <ListPageHeading
              heading="menu.image-list"
              displayMode={displayMode}
              changeDisplayMode={changeDisplayMode}
              handleChangeSelectAll={handleChangeSelectAll}
              changeOrderBy={changeOrderBy}
              changePageSize={changePageSize}
              selectedPageSize={selectedPageSize}
              totalItemCount={totalItemCount}
              selectedOrderOption={selectedOrderOption}
              match={match}
              startIndex={startIndex}
              endIndex={endIndex}
              selectedItemsLength={selectedItems ? selectedItems.length : 0}
              itemsLength={items ? items.length : 0}
              onSearchKey={onSearchKey}
              orderOptions={orderOptions}
              pageSizes={pageSizes}
              toggleModal={toggleModal}
            />
           
            
             
              <Row> 
             productsData.products.map((product) => {
              <Produits product = {product}/>
              }) 
              
              <Pagination
                currentPage={currentPage}
                totalPage={totalPage}
                onChangePage={i => onChangePage(i)}
              />
              <ContextMenuContainer
                onContextMenuClick={onContextMenuClick}
                onContextMenu={onContextMenu}
              />
            </Row>
            </div>     
          
        </Fragment>
        </div>
        : ""}
        <FooterTwo  FooterData={FooterData}/>
        </div> 
        
      )
    
  }
export default ThumbListPages;  */
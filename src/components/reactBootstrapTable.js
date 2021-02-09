import React, {Component, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {productAction} from '../actions/productActions';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import axios from 'axios';

class Container extends Component {
  state = {
    products: [],
    columns: [
      {
        dataField: 'id',
        text: 'Product ID',
      },
      {
        dataField: 'title',
        text: 'Title',
      },
      {
        dataField: 'price',
        text: 'Product Price',
      },
      {
        dataField: 'mrpprice',
        text: 'MRP Price',
      },
    ],
    // page: 1,
    // sizePerPage: 3,
    // totalSize: 0,
  };
  // handleTableChange = (page, sizePerPage) => {
  //   const currentIndex = (page - 1) * sizePerPage;
  //   setTimeout(() => {
  //     this.setState(() => ({
  //       page,
  //       products: this.state.products.slice(
  //         currentIndex,
  //         currentIndex + sizePerPage
  //       ),
  //       sizePerPage,
  //     }));
  //   }, 2000);
  // };

  componentDidMount() {
    alert();
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        this.setState({
          products: data.products,
          totalSize: data.products.length,
        });
      })
      .catch(console.log);
  }

  render() {
    //const {products, sizePerPage, page, totalSize} = this.state;

    const customTotal = (from, to, size) => (
      <span className='react-bootstrap-table-pagination-total'>
        Showing {from} to {to} of {size} Results
      </span>
    );

    const options = {
      paginationSize: 4,
      pageStartIndex: 0,
      // alwaysShowAllBtns: true, // Always show next and previous button
      // withFirstAndLast: false, // Hide the going to First and Last page button
      // hideSizePerPage: true, // Hide the sizePerPage dropdown always
      // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
      firstPageText: 'First',
      prePageText: 'Back',
      nextPageText: 'Next',
      lastPageText: 'Last',
      nextPageTitle: 'First page',
      prePageTitle: 'Pre page',
      firstPageTitle: 'Next page',
      lastPageTitle: 'Last page',
      showTotal: true,
      paginationTotalRenderer: customTotal,
      disablePageTitle: true,
      sizePerPageList: [
        {
          text: '5',
          value: 5,
        },
        {
          text: '10',
          value: 10,
        },
        {
          text: 'All',
          value: this.state.products.length,
        },
      ], // A numeric array is also available. the purpose of above example is custom the text
    };

    return (
      <div>
        <section className='ftco-section'>
          <div className='container'>
            {!this.state.products ? (
              <div>Loading</div>
            ) : (
              <BootstrapTable
                remote
                keyField='id'
                products={this.state.products}
                columns={this.state.columns}
                //totalSize={this.state.products.length}
                pagination={paginationFactory(options)}
                //pagination={paginationFactory({page, sizePerPage, totalSize})}
                //onTableChange={this.handleTableChange()}
              />
            )}
          </div>
        </section>
      </div>
    );
  }
}

// export default connect((state) => ({products: state.products.items}), {
//   productAction,
// })(Container);

export default Container;

import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import {Icon, Menu} from "semantic-ui-react";
// Redux
import {connect} from "react-redux";
// Components
import EditBloodProduct from "../EditBloodProduct";
import DeleteBloodProduct from "../DeleteBloodProduct";

class BloodProductDetailMenuItems extends Component {

  render() {
    const {admin, bloodProduct: {productId}} = this.props;
    return (
      <Fragment>
        <Menu.Menu position='left'>
          <Link to='/bloodProductInformation'>
            <Menu.Item name='bloodProductInformation'>
              <Icon name='chevron left'/>
              Blood Product Info
            </Menu.Item>
          </Link>
        </Menu.Menu>
        {admin && (
          <Menu.Menu position='right'>
            <EditBloodProduct/>
            <DeleteBloodProduct productId={productId}/>
          </Menu.Menu>
        )}
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  bloodProduct: state.data.bloodProduct,
  admin: state.user.credentials.admin
});

export default withRouter(connect(mapStateToProps)(BloodProductDetailMenuItems));
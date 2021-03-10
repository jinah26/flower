import React, {useEffect, useState} from 'react'
import {useDispatch}  from 'react-redux';
import { getCartItems, removeCartItem, onSuccessBuy } from '../../../_actions/user_actions'
import UserCardBlock from './Sections/UserCardBlock'
import { Empty, Result} from 'antd';
import Paypal from '../../utils/Paypal'

function CartPage(props) {
    const dispatch = useDispatch();

    const [Total, setTotal] = useState(0)
    const [ShowTotal, setShowTotal] = useState(false)
    const [ShowSuccess, setShowSuccess] = useState(false)

    useEffect(() => {
        let cartItems = [];
    
        if (props.user.userData && props.user.userData.cart) {
          if (props.user.userData.cart.length > 0) {
            props.user.userData.cart.forEach((item) => {
              cartItems.push(item.id);
            });
    
            dispatch(getCartItems(cartItems, props.user.userData.cart)).then(
              (res) => {
                calulateTotal(res.payload);
              }
            );
          }
        }
      }, [props.user.userData]);

      let calulateTotal = (cartDetail) => {
        let total = 0;
    
        cartDetail.map((item) => {
          total += parseInt(item.price, 10) * parseInt(item.quantity);
        });
        setTotal(total);
        setShowTotal(true);
      };

      let removeFromCart = (productId) => {
        dispatch(removeCartItem(productId)).then((res) => {
          if (res.payload.productInfo.length <= 0) {
            setShowTotal(false);
          }
        });
      };

      const transactionSuccess = (data) => {

        dispatch(onSuccessBuy({
            paymentData: data,
            cartDetail: props.user.cartDetail
        }))
        .then(response => {
            if(response.payload.success) {
                setShowTotal(false)
                setShowSuccess(true)
            }
        })

      }


    return (
        <div style={{ width: "85%", margin: "3rem auto" }}>
        <h1>장바구니</h1>
        <div>
          <UserCardBlock
            removeItem={removeFromCart}
            products={props.user.cartDetail}
          />
        </div>
        {ShowTotal ? (
          <div style={{ marginTop: "3rem" }}>
            <h2>총 금액: {Total}원</h2>
          </div>
        ) : ShowSuccess ? (
          <Result status="success" title="Successfully Purchased Items" />
        ) : (
          <>
            <br />
            <Empty description={false} />
          </>
        )}
        {ShowTotal && <Paypal total={Total} onSuccess={transactionSuccess} />}
      </div>
      );
    }

export default CartPage;
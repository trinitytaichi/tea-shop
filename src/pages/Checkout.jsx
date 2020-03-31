import React, { useState, useEffect } from 'react'
// import Navbar from "react-bootstrap/Navbar";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
// import { Timeline, Icon } from 'rsuite'
// import 'rsuite/lib/styles/index.less'
// import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

// import{ BrowserRouter as Link} from "react-router-dom";
import '../styles/jc/checkout.scss'
import { number } from 'yup'
import { event } from 'd3'

function Checkout() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [amountPrice, setAmountPrice] = useState(0)
  const teststr = JSON.stringify([
    {
      title: '有機蜜韻紅茶補充包80g(手採)',
      tag: '紅茶',
      classIfy: '',
      price: '490',
      unit: '',
      sTime: '2',
      idVendor: 'tunlo',
      feaTure: '',
      img: '150327607526.jpg',
      id: 2,
      amount: 5,
    },

    {
      title: '有機蜜韻紅茶補充包80g(手採)',
      tag: '紅茶',
      classIfy: '',
      price: '490',
      unit: '',
      sTime: '2',
      idVendor: 'tunlo',
      feaTure: '',
      img: '150327607526.jpg',
      id: 2,
      amount: 5,
    },

    {
      title: '有機蜜韻紅茶補充包80g(手採)',
      tag: '紅茶',
      classIfy: '',
      price: '490',
      unit: '',
      sTime: '2',
      idVendor: 'tunlo',
      feaTure: '',
      img: '150327607526.jpg',
      id: 2,
      amount: 5,
    },

    {
      title: '有機蜜韻紅茶補充包80g(手採)',
      tag: '紅茶',
      classIfy: '',
      price: '490',
      unit: '',
      sTime: '2',
      idVendor: 'tunlo',
      feaTure: '',
      img: '150327607526.jpg',
      id: 2,
      amount: 5,
    },
  ])

  localStorage.setItem('cart', teststr)
  const localCart = JSON.parse(localStorage.getItem('cart'))
  console.log(localCart)

  const sumfunc = items => {
    let totalPrice = 0
    for (let i = 0; i < items.length; i++) {
      totalPrice += items[i].productAmount * items[i].productPrice
    }
    return totalPrice
  }

  const productli = (
    <>
      {localCart.map((value, index) => {
        return (
          <tr>
            <td>
              <input type="checkbox"></input>
            </td>
            <td>{value.title}</td>
            <td>{value.unit}</td>
            <td>{value.price}</td>
            <td>{value.amount}</td>
            <td>{value.price * value.amount}</td>
            <td>
              <i className="fas fa-trash"></i>
            </td>
          </tr>
        )
      })}
    </>
  )
  const totalPrice = localCart.reduce((acc, value, index) => {
    return acc + value.price * value.amount
  }, 0)
  console.log('totalPrice', totalPrice)

  useEffect(() => {
    setAmountPrice(totalPrice)
  }, [])

  // function App() {
  //   useEffect(() => {
  //     initCounpon()
  //   }, [])

  //   return (
  //     <>
  //       <Button onClick={() => console.log(getCoupon(3))}>取得coupon</Button>
  //     </>
  //   )
  // }

  const data = [
    {
      id: 2,
      coupon_code: 'PRWCODE2',
      discount: 200,
      status: 'Valid',
    },
    {
      id: 3,
      coupon_code: 'PRWCODE3',
      discount: 300,
      status: 'Valid',
    },
    {
      id: 4,
      coupon_code: 'PRWCODE4',
      discount: 400,
      status: 'Valid',
    },

    {
      id: 5,
      coupon_code: 'PRWCODE5',
      discount: 500,
      status: 'Valid',
    },

    {
      id: 6,
      coupon_code: 'PRWCODE6',
      discount: 600,
      status: 'Valid',
    },
  ]

  const getCoupon = id => {
    const couponList = JSON.parse(localStorage.getItem('myCoupon'))

    const couponFoundList = couponList.filter((v, i) => {
      if (v.id === id) return v
    })

    return couponFoundList[0]
  }

  const getCouponList = () => {
    return JSON.parse(localStorage.getItem('myCoupon'))
  }

  const initCounpon = () => {
    localStorage.setItem('myCoupon', JSON.stringify(data))
  }

  return (
    <div className="container">
      <Row>
        <Col sm={4}>
          <div className="timeline-small">
            <div className="timeline-small-body">
              <ul>
                <li>
                  <div className="bullet norange"></div>
                  <div className="desc">
                    <h3>結帳</h3>
                  </div>
                </li>
                <li>
                  <div className="bullet orange"></div>
                  <div className="desc">
                    <h3>付款資訊</h3>
                  </div>
                </li>
                <li>
                  <div className="bullet orange"></div>
                  <div className="desc">
                    <h3>完成訂單</h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col sm={8}>
          <h1 className="h123">結帳</h1>
          <Table bordered hover variant="">
            <thead className="thbc">
              <tr>
                <th>
                  <input type="checkbox"></input>
                </th>
                <th>商品</th>
                <th>單位</th>
                <th>價格</th>
                <th>數量</th>
                <th>總計</th>
                <th>刪除</th>
              </tr>
            </thead>
            <tbody>{productli}</tbody>
            <tfoot></tfoot>
          </Table>
        </Col>
      </Row>

      <div className="calprice">
        <Row>
          <Col></Col>
          <Col></Col>
          <Col sm={2}>總金額</Col>
          <Col sm={1}>{amountPrice}</Col>
        </Row>
      </div>

      <div>
        <Row className="couponrow">
          <Col></Col>
          <Col></Col>
          <Col>優惠券</Col>
          <Col sm={3}>
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                onClick={handleShow}
              >
                請選擇優惠券代碼
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {data.map((value, index) => {
                  return (
                    <Dropdown.Item
                      onSelect={(eventKey, event) => {
                        setAmountPrice(amountPrice - eventKey)
                        console.log('fire on selected')
                      }}
                      eventKey={value.discount}
                    >
                      {value.coupon_code}
                    </Dropdown.Item>
                  )
                })}

                {/* <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">2 </Dropdown.Item>
                <Dropdown.Item href="#/action-3">3</Dropdown.Item> */}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col sm={2}>
            <Link to="/payinfo">
              <Button className="checkbtn " block>
                <span>結帳</span>
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>檢視優惠券</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {' '}
          {data.map((value, index) => {
            return (
              <Dropdown.Item
                onSelect={(eventKey, event) => {
                  setAmountPrice(amountPrice - eventKey)
                  console.log('fire on selected')
                }}
                eventKey={value.discount}
              >
                {value.coupon_code}
              </Dropdown.Item>
            )
          })}
          {/* <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">2 </Dropdown.Item>
                <Dropdown.Item href="#/action-3">3</Dropdown.Item> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            離開
          </Button>
          <Button variant="primary" onClick={handleClose}>
            選擇
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default Checkout

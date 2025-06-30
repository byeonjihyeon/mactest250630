import { Routes } from 'react-router-dom';
import './member.css';
import Sidebar from './sidebar';
import { useState } from 'react';

export default function MemberMain(){

    //사이드메뉴 state변수
    //submenuList == 메뉴의 서브메뉴
    const [menuList, setMenuList] = useState([
        {url: '/member', name: 'MY홈' },
        {url: '/member/news', name: '내 소식' },
        {url: '/member/update', name: '회원정보 수정' },
        {url: '/member/donateList', name: '기부내역조회' },
        {url: '/member/likeOrgList', name: '관심단체' },
        {url: '/member/money/charge', name: '예치금 충전/환불', submenuList: [{url: '/member/money/charge' , name: '예치금 충전'}, {url: '/member/money/chargeHistory' , name: '예치금 충전내역'}, 
                                                                          {url: '/member/money/refund' , name: '예치금 환불'}, {url: '/member/money/refundHistory' , name: '예치금 환불내역'} 
        ]},
        {url: '/member/delete', name: '탈퇴하기'}
    ])

    return (
        <div className='member-main-wrap'>
            <Sidebar menuList = {menuList} />
            <div className='member-main-mid-wrap'>
            
            </div>
        </div>
    )
}
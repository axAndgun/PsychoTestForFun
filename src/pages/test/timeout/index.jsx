
import React from 'react';
import ClientSideLink from '../../../components/atoms/ClientSideLink'


function index() {
  return (
    <div>
      시간초과입니다.<br/>
      <ClientSideLink href="/"> 처음으로 </ClientSideLink>
    </div>
  );
}

export default index;
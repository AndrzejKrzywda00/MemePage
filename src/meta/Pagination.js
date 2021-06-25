import React from 'react';
import {Pagination} from "react-bootstrap";

let active = 1;
let items = [];

for (let number = 1; number < 10; number++) {
    items.push(
        <Pagination.Item key={number} active={number===active}>
            {number}
        </Pagination.Item>
    );
}

const paginationBasic = (
    <div>
        <Pagination{items}/>
        <br />
        <Pagination size={"lg"}>{items}</Pagination>
    </div>
);

render(paginationBasic);
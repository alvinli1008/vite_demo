import React from 'react';
import { Button } from 'antd';
import { toJS } from 'mobx';
import { observer, inject } from 'mobx-react';

function Demo({ demo }) {
  console.log('demo', toJS(demo));
  return (
    <div>
      demo
      <Button
        type="primary"
        onClick={() => {
          demo.sum++;
        }}
      >
        btn {demo.sum}
      </Button>
    </div>
  );
}

export default inject('demo')(observer(Demo));

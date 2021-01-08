import React from "react";
import { storiesOf} from "@storybook/react";
import { action } from "@storybook/addon-actions";


import Button,{ButtonSize,ButtonType} from "./button";

const styles:React.CSSProperties = {
    textAlign:'center',
}
const CenterDecorator = (storyFn:any)=><div style={styles}>{storyFn()}</div>
const defaultButton = () => (
  <Button onClick={action("clicked")}>default button</Button>
);
const buttonWithSize = ()=>(
    <>

    <Button size='lg'>large button</Button>
    <Button size='sm'>small button</Button>
    </>
)
const buttonWithType = ()=>(
    <>
     <Button btnType='primary'>primary button</Button>
     <Button btnType='danger'>Danger button</Button>
     <Button btnType='link' href="#">link button</Button>
    </>
)

storiesOf("Button Component", module)
.addParameters({
    info:{
        text:`
        通过import引入Button组件
        ~~~js
        import {Button} from 'chalk'
        ~~~
        `,
        inline:true
    }
})
.addDecorator(CenterDecorator)
.add("Button", defaultButton)
.add("不同尺寸的Button",buttonWithSize)
.add("不同类型的Button",buttonWithType)

import Button from 'react-bootstrap/Button';

const ButtonComponent = ({setTogglePopupBtn}) => {
  return (
    <div className='Add-Rules'>
     <Button variant="success" onClick={()=>setTogglePopupBtn(true)}>Submit</Button>
    </div>
  )
}

export default ButtonComponent;

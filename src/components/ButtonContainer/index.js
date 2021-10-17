import {ButtonListContainer, Button, ButtonImage} from './styledComponents'

const ButtonContainer = props => {
  const {buttonItems, onGetGame} = props
  const {id, image} = buttonItems
  const testCaseId = id.toLowerCase()

  const onclickGetGame = () => {
    onGetGame(id, image)
  }

  return (
    <ButtonListContainer>
      <Button onClick={onclickGetGame} type="button">
        <ButtonImage src={image} alt={id} data-testid={`${testCaseId}Button`} />
      </Button>
    </ButtonListContainer>
  )
}
export default ButtonContainer

import { atom, useAtom } from 'jotai'

const nameAtom = atom('')
const categoryAtom = atom('')
const titleAtom = atom('')
const locationAtom = atom('')

const CreateForm = () => {
  const [nameValue, setName] = useAtom(nameAtom)
  const [categoryValue, setCategory] = useAtom(categoryAtom)
  const [titleValue, setTitle] = useAtom(titleAtom)
  const [locationValue, setLocation] = useAtom(locationAtom)
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value)
  const handleCategChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCategory(e.target.value)
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value)
  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLocation(e.target.value)

  const handleSubmit = () => {
    console.log('name:', nameValue)
    console.log('category:', categoryValue)
    console.log('title:', titleValue)
    console.log('location:', locationValue)
  }

  return (
    <div>
      <h1>생성폼입니다.</h1>
      <br />
      <label htmlFor="이름">
        이 름 : <input value={nameValue} onChange={handleNameChange} />
      </label>
      <br />
      <label htmlFor="카테고리">
        카테고리 : <input value={categoryValue} onChange={handleCategChange} />
      </label>
      <br />
      <label htmlFor="제목">
        제 목 : <input value={titleValue} onChange={handleTitleChange} />
      </label>
      <br />
      <label htmlFor="위치">
        위 치 : <input value={locationValue} onChange={handleLocationChange} />
      </label>

      <br />
      <button type="submit" onClick={handleSubmit}>
        게시글 등록
      </button>
    </div>
  )
}

export default CreateForm

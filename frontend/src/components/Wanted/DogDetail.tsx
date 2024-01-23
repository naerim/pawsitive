import {fetchDogDetails} from "@src/apis/api.tsx";
import {useQuery} from "@tanstack/react-query";

const DogDetail = () => {
    interface DogDetailInterface {
        "name": "string",
        "shelter": "string",
        "neutralized": "string",
        "description": "string"
    }

    const { isLoading, data } = useQuery<DogDetailInterface>(
        { queryKey: ["Detail"], queryFn: () => fetchDogDetails(1),})

    return (
        <div>
            <h1>강아지 디테일</h1>
                {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h2>{data.name}</h2>
                    <p>보호소: {data.shelter}</p>
                    <p>중성화 여부: {data.neutralized}</p>
                    <p>설명: {data.description}</p>
                </div>
            )}
            </div>
    )
}

export default DogDetail
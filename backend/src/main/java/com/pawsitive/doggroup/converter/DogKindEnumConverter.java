package com.pawsitive.doggroup.converter;

import com.pawsitive.doggroup.entity.DogKindEnum;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter
public class DogKindEnumConverter
    implements AttributeConverter<DogKindEnum, String> {
    @Override
    public String convertToDatabaseColumn(DogKindEnum dogKindEnum) {

        return dogKindEnum.getName();
    }

    @Override
    public DogKindEnum convertToEntityAttribute(String dbData) {
        return DogKindEnum.stringToEnum(dbData);
    }
}

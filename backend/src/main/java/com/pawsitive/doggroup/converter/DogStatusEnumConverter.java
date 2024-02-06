package com.pawsitive.doggroup.converter;

import com.pawsitive.doggroup.dogenum.DogStatusEnum;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter
public class DogStatusEnumConverter
    implements AttributeConverter<DogStatusEnum, Integer> {
    @Override
    public Integer convertToDatabaseColumn(DogStatusEnum dogStatusEnum) {
        return dogStatusEnum.getNo();
    }

    @Override
    public DogStatusEnum convertToEntityAttribute(Integer dbData) {
        return DogStatusEnum.intToEnum(dbData);
    }
}

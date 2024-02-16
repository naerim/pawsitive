package com.pawsitive.communitygroup.converter;

import com.pawsitive.communitygroup.entity.CommunityCategoryEnum;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter
public class CommunityCategoryEnumConverter
    implements AttributeConverter<CommunityCategoryEnum, String> {
    @Override
    public String convertToDatabaseColumn(CommunityCategoryEnum communityCategoryEnum) {
        return communityCategoryEnum.getCategoryName();
    }

    @Override
    public CommunityCategoryEnum convertToEntityAttribute(String dbData) {
        return CommunityCategoryEnum.stringToEnum(dbData);
    }
}

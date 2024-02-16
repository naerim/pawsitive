package com.pawsitive.contentgroup.converter;

import com.pawsitive.contentgroup.entity.ContentCategoryEnum;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter
public class ContentCategoryEnumConverter
    implements AttributeConverter<ContentCategoryEnum, String> {
    @Override
    public String convertToDatabaseColumn(ContentCategoryEnum contentCategoryEnum) {
        return contentCategoryEnum.getContentCategory();
    }

    @Override
    public ContentCategoryEnum convertToEntityAttribute(String dbData) {
        return ContentCategoryEnum.stringToEnum(dbData);
    }
}

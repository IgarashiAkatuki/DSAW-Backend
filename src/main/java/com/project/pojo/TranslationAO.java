package com.project.pojo;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.springframework.lang.Nullable;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import javax.validation.constraints.Size;
import java.io.Serializable;


@ApiModel("TranslationAO实体类")
public class TranslationAO implements Serializable {

    @NotNull(message = "词条不能为空")
    @Size(max = 100,min = 1,message = "词条长度不合法")
    @ApiModelProperty("词条")
    private String word;

    @NotNull(message = "翻译不能为空")
    @Size(max = 100,min = 1,message = "翻译长度不合法")
    @ApiModelProperty("词条的翻译")
    private String translation;

    @Nullable
    @ApiModelProperty("词条的来源")
    private String source;

    @Nullable
    @ApiModelProperty("词条URL")
    private String url;

    public TranslationAO(){};

    public String getWord() {
        return word;
    }

    public void setWord(String word) {
        this.word = word;
    }

    public String getTranslation() {
        return translation;
    }

    public void setTranslation(String translation) {
        this.translation = translation;
    }

    @Nullable
    public String getSource() {
        return source;
    }

    public void setSource(@Nullable String source) {
        this.source = source;
    }

    public void setUrl(@Nullable String url){
        this.url = url;
    }

    public String getUrl(){
        if (this.url == null || this.url.isEmpty()){
            return "null";
        }
        return this.url;
    }

    @Override
    public String toString() {
        return "TranslationAO{" +
                "word='" + word + '\'' +
                ", translation='" + translation + '\'' +
                ", source='" + source + '\'' +
                '}';
    }
}

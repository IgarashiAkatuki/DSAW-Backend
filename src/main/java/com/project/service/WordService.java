package com.project.service;

import com.project.pojo.Word;

import java.util.List;

public interface WordService {
    public int addWord(Word word);
    public int deleteWordById(int id);
    public int deleteWordByName(String word);
    public int updateWord(Word word);
    public Word queryWordById(int id);
    public Word queryWordByName(String word);
    public List<Word> queryAllWord();
    public int addLikes(String word);
    public List<Word> getRandomWords(int likes,int limits);
    public int getWordId(String word);
}

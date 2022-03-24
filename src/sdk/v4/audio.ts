import {
  AudioData,
  ChapterId,
  HizbNumber,
  JuzNumber,
  Language,
  PageNumber,
  Pagination,
  RubNumber,
  VerseKey,
} from '@/types';
import Utils from '../utils';
import { fetcher } from './_fetcher';

type GetRecitationsOptions = Partial<{
  language: Language;
}>;

const defaultOptions: GetRecitationsOptions = {
  language: Language.ARABIC,
};

const getAudioOptions = (options: GetRecitationsOptions = {}) => {
  const final: any = { ...defaultOptions, ...options };

  return final;
};

const Audio = {
  async findAllChapterRecitations(
    reciterId: string,
    options?: GetRecitationsOptions
  ) {
    const params = getAudioOptions(options);
    const { audioFiles } = await fetcher<{ audioFiles: AudioData[] }>(
      `/chapter_recitations/${reciterId}`,
      params
    );
    return audioFiles;
  },
  async findChapterRecitationById(
    chapterId: ChapterId,
    reciterId: string,
    options?: GetRecitationsOptions
  ) {
    if (!Utils.isValidChapterId(chapterId))
      throw new Error('Invalid chapter id');

    const params = getAudioOptions(options);
    const { audioFile } = await fetcher<{ audioFile: AudioData }>(
      `/chapter_recitations/${reciterId}/${chapterId}`,
      params
    );

    return audioFile;
  },
  async findVerseRecitationsByChapter(
    chapterId: ChapterId,
    recitationId: string,
    options?: GetRecitationsOptions
  ) {
    if (!Utils.isValidChapterId(chapterId))
      throw new Error('Invalid chapter id');

    const params = getAudioOptions(options);
    const data = await fetcher<{
      audioFiles: AudioData[];
      pagination: Pagination;
    }>(`/recitations/${recitationId}/by_chapter/${chapterId}`, params);

    return data;
  },
  async findVerseRecitationsByJuz(
    juz: JuzNumber,
    recitationId: string,
    options?: GetRecitationsOptions
  ) {
    if (!Utils.isValidJuz(juz)) throw new Error('Invalid juz');

    const params = getAudioOptions(options);
    const data = await fetcher<{
      audioFiles: AudioData[];
      pagination: Pagination;
    }>(`/recitations/${recitationId}/by_juz/${juz}`, params);

    return data;
  },
  async findVerseRecitationsByPage(
    page: PageNumber,
    recitationId: string,
    options?: GetRecitationsOptions
  ) {
    if (!Utils.isValidQuranPage(page)) throw new Error('Invalid page');

    const params = getAudioOptions(options);
    const data = await fetcher<{
      audioFiles: AudioData[];
      pagination: Pagination;
    }>(`/recitations/${recitationId}/by_page/${page}`, params);

    return data;
  },
  async findVerseRecitationsByRub(
    rub: RubNumber,
    recitationId: string,
    options?: GetRecitationsOptions
  ) {
    if (!Utils.isValidRub(rub)) throw new Error('Invalid rub');

    const params = getAudioOptions(options);
    const data = await fetcher<{
      audioFiles: AudioData[];
      pagination: Pagination;
    }>(`/recitations/${recitationId}/by_rub/${rub}`, params);

    return data;
  },
  async findVerseRecitationsByHizb(
    hizb: HizbNumber,
    recitationId: string,
    options?: GetRecitationsOptions
  ) {
    if (!Utils.isValidHizb(hizb)) throw new Error('Invalid hizb');

    const params = getAudioOptions(options);
    const data = await fetcher<{
      audioFiles: AudioData[];
      pagination: Pagination;
    }>(`/recitations/${recitationId}/by_hizb/${hizb}`, params);

    return data;
  },
  async findVerseRecitationsByKey(
    key: VerseKey,
    recitationId: string,
    options?: GetRecitationsOptions
  ) {
    if (!Utils.isValidVerseKey(key)) throw new Error('Invalid verse key');

    const params = getAudioOptions(options);
    const data = await fetcher<{
      audioFiles: AudioData[];
      pagination: Pagination;
    }>(`/recitations/${recitationId}/by_ayah/${key}`, params);

    return data;
  },
};

export default Audio;
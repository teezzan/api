import { quran } from '@/index';

const resources = quran.v4.resources;

describe('Resources API', () => {
  describe('findAllChapterInfos()', () => {
    it('should return data', async () => {
      const data = await resources.findAllChapterInfos();
      expect(data).toBeInstanceOf(Array);
    });
  });

  describe('findAllChapterReciters()', () => {
    it('should return data', async () => {
      const data = await resources.findAllChapterReciters();
      expect(data).toBeInstanceOf(Array);
    });
  });

  describe('findAllLanguages()', () => {
    it('should return data', async () => {
      const data = await resources.findAllLanguages();
      expect(data).toBeInstanceOf(Array);
    });
  });

  describe('findAllRecitationStyles()', () => {
    it('should return data', async () => {
      const data = await resources.findAllRecitationStyles();
      expect(data).toBeDefined();
    });
  });

  describe('findAllRecitations()', () => {
    it('should return data', async () => {
      const data = await resources.findAllRecitations();
      expect(data).toBeInstanceOf(Array);
    });
  });

  describe('findAllTafsirs()', () => {
    it('should return data', async () => {
      const data = await resources.findAllTafsirs();
      expect(data).toBeInstanceOf(Array);
    });
  });

  describe('findAllTranslations()', () => {
    it('should return data', async () => {
      const data = await resources.findAllTranslations();
      expect(data).toBeInstanceOf(Array);
    });
  });

  // TODO: uncomment when API is ready
  // describe('findRecitationInfo()', () => {
  //   it('should return data', async () => {
  //     const recitations = await resources.findAllRecitations();

  //     expect(
  //       resources.findRecitationInfo(String(recitations[0].id))
  //     ).resolves.toBeDefined();
  //   });
  // });

  // TODO: uncomment when API is ready
  // describe('findTafsirInfo()', () => {
  //   it('should return data', async () => {
  //     const tafsirs = await resources.findAllTafsirs();
  //     expect(tafsirs).toBeInstanceOf(Array);
  //     expect(tafsirs[0]).toHaveProperty('id');

  //     const info = await resources.findTafsirInfo(String(tafsirs[0].id));
  //     expect(info).toBeDefined();
  //   });
  // });

  // TODO: uncomment when API is ready
  // describe('findTranslationInfo()', () => {
  //   it('should return data', async () => {
  //     const translations = await resources.findAllTranslations();

  //     expect(
  //       resources.findTranslationInfo(String(translations[0].id))
  //     ).resolves.toBeDefined();
  //   });
  // });

  describe('findVerseMedia()', () => {
    it('should return data', async () => {
      const data = await resources.findVerseMedia();
      expect(data).toBeDefined();
    });
  });
});

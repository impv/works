import Parser from 'rss-parser';

interface Query {
  memberSlugs?: string[];
  limit?: number;
}

interface Feed {
  title?: string;
  items: any[];
}

const parser = new Parser();

export function filterItemsByMemberSlugs(items: any[], memberSlugs: string[]): any[] {
  return items.filter(item => {
    // `content` の存在を確認し、なければフィルタリングから除外
    if (!item.content) return false;

    const metaIndex = item.content.indexOf('Meta:');
    if (metaIndex === -1) return false;

    // `content` に 'Meta:' が含まれる場合、そのセクションを解析
    const metaSection = item.content.substring(metaIndex + 5);
    // 指定されたメンバーIDがメタセクションに含まれているかを確認

    return memberSlugs.some(slug => metaSection.includes(slug));
  });
}

export async function getFeed(query?: Query): Promise<Feed> {
  if (!import.meta.env.PODCAST_RSS_URL) {
    return { items: [] };
  }

  const feed = await parser.parseURL(import.meta.env.PODCAST_RSS_URL);
  let filteredItems = feed.items;

  // `memberSlugs` を使ってアイテムをフィルタリング
  if (query?.memberSlugs?.length) {
    filteredItems = filterItemsByMemberSlugs(feed.items, query.memberSlugs);
  }

  // limitが指定されている場合、制限された数のアイテムのみを含む新しい配列を作成
  const limitedItems = query?.limit ? filteredItems.slice(0, query.limit) : filteredItems;

  return {
    ...feed,
    items: limitedItems,
  };
}
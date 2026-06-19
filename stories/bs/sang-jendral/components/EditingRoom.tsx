
export interface PartProps {
    title: string;
    subtitle?: string;
    image?: string;
    partNumber?: string;
    content?: string;
};

export interface Chapter {
    title: string;
    chapterNumber: string;
    bannerImage?: string;
    partsPath?: Array<string>;
    parts?: Array<PartProps>;
};

export async function LoadChapter(fromPath: string): Promise<Chapter> {
    try {
        const data = await Deno.readTextFile(`${fromPath}/chapter.json`);
        const obj = JSON.parse(data);
        console.log(`Data:\n${obj}`);
        const ch = obj as Chapter;

        // This is not finished!
        return ch;        
    }
    catch (err) {
        console.log(`LoadChapter: ${err}`);
        return {
            title: `Error: ${err}`,
            chapterNumber: "-1"
        };
    }
}

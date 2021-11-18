const { Client } = require("@notionhq/client");

// const tokens = require("./tokens.json");

// const NOTION_KEY = tokens['notion_key'];
// const databaseId = tokens['database_id'];

const NOTION_KEY = 'secret_orRumyrZemO144RFIq1GwDHWtw0MUFlEyUccSZJWar7'

const notion = new Client({ auth: NOTION_KEY })
// const page_id = 'notion-daily-44033303a93b47e4a544feaad356bf82'

async function search(){
    const response = await notion.search({
        query: 'notion daily',
        sort: {
        direction: 'ascending',
        timestamp: 'last_edited_time',
        },
    });
    const page_id = response.results[0].id;
    console.log(page_id);
    return page_id;
}

search();
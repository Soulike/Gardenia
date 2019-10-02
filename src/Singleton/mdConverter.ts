import showdown from 'showdown';

export default new showdown.Converter({
    tables: true,
    strikethrough: true,
    tasklists: true,
    emoji: true,
});
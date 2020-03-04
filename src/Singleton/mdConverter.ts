import showdown from 'showdown';

const converter = new showdown.Converter({
    tables: true,
    strikethrough: true,
    tasklists: true,
    emoji: true,
});

converter.setFlavor('github');

export default converter;
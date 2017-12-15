const {ActionSheet, TextView, Button, ui} = require('tabris');
const IMAGE_PATH = 'https://raw.githubusercontent.com/eclipsesource/tabris-js/master/snippets/resources/';

new Button({
  left: 16, right: 16, top: 16,
  text: 'Show ActionSheet'
}).on({select: showActionSheet})
  .appendTo(ui.contentView);

let selectionTextView = new TextView({
  left: 16, right: 16, top: ['prev()', 16],
  alignment: 'center'
}).appendTo(ui.contentView);

function showActionSheet() {
  new ActionSheet({
    title: 'Actions',
    message: 'Select any of the actions below to proceed.',
    actions: [
      {title: 'Search', image: {src: IMAGE_PATH + 'search-black-24dp@3x.png', scale: 3}},
      {title: 'Share', image: {src: IMAGE_PATH + 'share-black-24dp@3x.png', scale: 3}},
      {title: 'Settings', image: {src: IMAGE_PATH + 'settings-black-24dp@3x.png', scale: 3}},
      {title: 'Delete', image: {src: IMAGE_PATH + 'delete-black-24dp@3x.png', scale: 3}, style: 'destructive'},
      {title: 'Cancel', image: {src: IMAGE_PATH + 'close-black-24dp@3x.png', scale: 3}, style: 'cancel'},
    ]
  }).on({
    select: ({target: actionSheet, index}) => selectionTextView.text = `"${actionSheet.actions[index].title}" selected`,
    close: () => console.log('ActionSheet closed')
  }).open();
}

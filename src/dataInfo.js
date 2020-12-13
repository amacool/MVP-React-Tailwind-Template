import InboxIcon from './assets/images/inbox.svg';
import DraftsIcon from './assets/images/drafts.svg';
import EmailSentIcon from './assets/images/send-mail.svg';
import PhotoIcon from './assets/images/photo.svg';
import StarIcon from './assets/images/star.svg';
import InboxWorkIcon from './assets/images/inbox-work.svg';
import DraftsWorkIcon from './assets/images/drafts-work.svg';

export const listData = {
    simpleListData: {
        listWithIcon: [
            {
                name: 'Inbox',
                icon: InboxIcon,
            }, {
                name: 'Drafts',
                icon: DraftsIcon,
            }
        ],
        listWithoutIcon: ['Trash', 'Spam'],
    },
    nestedListData: [
        {
            name: 'Sent Mail',
            icon: EmailSentIcon,
        }, {
            name: 'Drafts',
            icon: DraftsIcon,
        }, {
            name: 'Inbox',
            icon: InboxIcon,
            subList: [
                {
                    name: 'Starred',
                    icon: StarIcon,
                },
            ]
        },
    ],
    folderListData: [
        {
            name: 'Photos',
            icon: PhotoIcon,
            date: 'Jan 9, 2014',
        }, {
            name: 'Work',
            icon: InboxWorkIcon,
            date: 'Jan 7, 2014',
        }, {
            name: 'Vacatiopn',
            icon: DraftsWorkIcon,
            date: 'July 20, 2014',
        },
    ],
}
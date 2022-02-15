// type Price = string;

// type ProductId = string;


// export interface Product {
//     id: ProductId
//     author: string
//     published: string
//     title: string
//     category: string
//     publisher: string
//     price: Price
//     discount: string
// }

export interface MemberList {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}
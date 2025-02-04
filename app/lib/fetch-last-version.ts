export type GHLatestVersionResponse = {
  url: string;
  assets_url: string;
  upload_url: string;
  html_url: string;
  id: number;
  author: {
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
    user_view_type: string;
    site_admin: boolean;
  };
  node_id: string;
  tag_name: string;
  target_commitish: string;
  name: string;
  draft: boolean;
  prerelease: boolean;
  created_at: string;
  published_at: string;
  assets: Array<{
    url: string;
    id: number;
    node_id: string;
    name: string;
    label: any;
    uploader: {
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
      user_view_type: string;
      site_admin: boolean;
    };
    content_type: string;
    state: string;
    size: number;
    download_count: number;
    created_at: string;
    updated_at: string;
    browser_download_url: string;
  }>;
  tarball_url: string;
  zipball_url: string;
  body: string;
};

export default function fetchLastVersion(): Promise<GHLatestVersionResponse | null> {
  if (process.env.NODE_ENV === "development")
    return Promise.resolve({
      url: "https://api.github.com/repos/JulianKominovic/mechy-keyboard/releases/198219113",
      assets_url:
        "https://api.github.com/repos/JulianKominovic/mechy-keyboard/releases/198219113/assets",
      upload_url:
        "https://uploads.github.com/repos/JulianKominovic/mechy-keyboard/releases/198219113/assets{?name,label}",
      html_url:
        "https://github.com/JulianKominovic/mechy-keyboard/releases/tag/v1.0.0-beta.0",
      id: 198219113,
      author: {
        login: "JulianKominovic",
        id: 70329467,
        node_id: "MDQ6VXNlcjcwMzI5NDY3",
        avatar_url: "https://avatars.githubusercontent.com/u/70329467?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/JulianKominovic",
        html_url: "https://github.com/JulianKominovic",
        followers_url: "https://api.github.com/users/JulianKominovic/followers",
        following_url:
          "https://api.github.com/users/JulianKominovic/following{/other_user}",
        gists_url:
          "https://api.github.com/users/JulianKominovic/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/JulianKominovic/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/JulianKominovic/subscriptions",
        organizations_url: "https://api.github.com/users/JulianKominovic/orgs",
        repos_url: "https://api.github.com/users/JulianKominovic/repos",
        events_url:
          "https://api.github.com/users/JulianKominovic/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/JulianKominovic/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
      },
      node_id: "RE_kwDOK-WUCc4L0JVp",
      tag_name: "v1.0.0-beta.0",
      target_commitish: "master",
      name: "1.0.0-beta.0",
      draft: false,
      prerelease: false,
      created_at: "2025-02-04T00:14:32Z",
      published_at: "2025-02-04T00:14:46Z",
      assets: [
        {
          url: "https://api.github.com/repos/JulianKominovic/mechy-keyboard/releases/assets/226017085",
          id: 226017085,
          node_id: "RA_kwDOK-WUCc4NeL89",
          name: "Mechy.Keyboard_1.0.0-beta.0_universal.dmg",
          label: null,
          uploader: {
            login: "JulianKominovic",
            id: 70329467,
            node_id: "MDQ6VXNlcjcwMzI5NDY3",
            avatar_url: "https://avatars.githubusercontent.com/u/70329467?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/JulianKominovic",
            html_url: "https://github.com/JulianKominovic",
            followers_url:
              "https://api.github.com/users/JulianKominovic/followers",
            following_url:
              "https://api.github.com/users/JulianKominovic/following{/other_user}",
            gists_url:
              "https://api.github.com/users/JulianKominovic/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/JulianKominovic/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/JulianKominovic/subscriptions",
            organizations_url:
              "https://api.github.com/users/JulianKominovic/orgs",
            repos_url: "https://api.github.com/users/JulianKominovic/repos",
            events_url:
              "https://api.github.com/users/JulianKominovic/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/JulianKominovic/received_events",
            type: "User",
            user_view_type: "public",
            site_admin: false,
          },
          content_type: "application/x-apple-diskimage",
          state: "uploaded",
          size: 9001086,
          download_count: 0,
          created_at: "2025-02-04T00:13:38Z",
          updated_at: "2025-02-04T00:13:40Z",
          browser_download_url:
            "https://github.com/JulianKominovic/mechy-keyboard/releases/download/v1.0.0-beta.0/Mechy.Keyboard_1.0.0-beta.0_universal.dmg",
        },
      ],
      tarball_url:
        "https://api.github.com/repos/JulianKominovic/mechy-keyboard/tarball/v1.0.0-beta.0",
      zipball_url:
        "https://api.github.com/repos/JulianKominovic/mechy-keyboard/zipball/v1.0.0-beta.0",
      body: '## Test\r\n\r\n<img width="1500" alt="Twitter og banner (2)" src="https://github.com/user-attachments/assets/a015c5a0-7d06-4f51-9b27-749e5a6d1fdc" />\r\n\r\n\r\n**Full Changelog**: https://github.com/JulianKominovic/mechy-keyboard/commits/v1.0.0-beta.0',
    });
  return fetch(
    "https://api.github.com/repos/JulianKominovic/mechy-keyboard/releases/latest"
  )
    .then((r) => (r.ok ? r.json() : null))
    .catch(() => null);
}

// This function is called when this page is navigated to.
export async function load({ page, fetch, session, stuff }) {
    // Send URL query parameters (e.g. "?tracker=Migraine") to the export variable called trackerLabel.
    return {
        props: {
            tracker_label: page.query.get('tracker'),
            previous_page: page.query.get('previous_page'),
            log_date_time: page.query.get('log_date_time')
        }
    };
}
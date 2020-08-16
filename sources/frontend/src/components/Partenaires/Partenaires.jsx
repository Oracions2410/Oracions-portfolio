import React from 'react'

import PartenaireItem from './PartenaireItem/PartenaireItem'

const Partenaires = () => {
    return <React.Fragment>

        <section class="section partenaires">

            <div class="section-head">
                <h3 class="section-title">They trust me</h3>
                <span class="underline"></span>
            </div>

            <div class="section-list partenaires">

                <PartenaireItem />
                <PartenaireItem />
                <PartenaireItem />
                <PartenaireItem />


            </div>

        </section>



    </React.Fragment>
}

export default Partenaires
import React from 'react'

export default function Page(props) {

  return (
    <div className="ml-16 my-16 ">
    <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600 pb-10">Projects</h2>
    <Modal show={this.state.show} handleClose={this.hideModal} cancelModal={this.cancelModal}>
      <p>Modal</p>
    </Modal>
    <div className="flex flex-wrap-reverse">
    <Table fetchData={this.fetchData} items={items} set={this.setProjects} deleteProject={this.deleteProject} />
    <Table  fetchData={this.fetchData}  projects={this.state.projects} setProjects={this.setProjects}/>
    </div>
</div>
)
}

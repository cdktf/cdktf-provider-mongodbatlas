# `data_mongodbatlas_privatelink_endpoint_service_data_federation_online_archive`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_privatelink_endpoint_service_data_federation_online_archive`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/privatelink_endpoint_service_data_federation_online_archive).

# `dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive` Submodule <a name="`dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive <a name="DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/privatelink_endpoint_service_data_federation_online_archive mongodbatlas_privatelink_endpoint_service_data_federation_online_archive}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoint_service_data_federation_online_archive

dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  endpoint_id: str,
  project_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.endpointId">endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/privatelink_endpoint_service_data_federation_online_archive#endpoint_id DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive#endpoint_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/privatelink_endpoint_service_data_federation_online_archive#project_id DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/privatelink_endpoint_service_data_federation_online_archive#id DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.endpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/privatelink_endpoint_service_data_federation_online_archive#endpoint_id DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive#endpoint_id}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/privatelink_endpoint_service_data_federation_online_archive#project_id DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/privatelink_endpoint_service_data_federation_online_archive#id DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoint_service_data_federation_online_archive

dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoint_service_data_federation_online_archive

dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoint_service_data_federation_online_archive

dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.endpointIdInput">endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.endpointId">endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `endpoint_id_input`<sup>Optional</sup> <a name="endpoint_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.endpointIdInput"></a>

```python
endpoint_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig <a name="DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoint_service_data_federation_online_archive

dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  endpoint_id: str,
  project_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.endpointId">endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/privatelink_endpoint_service_data_federation_online_archive#endpoint_id DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive#endpoint_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/privatelink_endpoint_service_data_federation_online_archive#project_id DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/privatelink_endpoint_service_data_federation_online_archive#id DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/privatelink_endpoint_service_data_federation_online_archive#endpoint_id DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive#endpoint_id}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/privatelink_endpoint_service_data_federation_online_archive#project_id DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchiveConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.0/docs/data-sources/privatelink_endpoint_service_data_federation_online_archive#id DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



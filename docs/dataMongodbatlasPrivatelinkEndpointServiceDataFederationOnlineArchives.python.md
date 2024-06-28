# `dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives` Submodule <a name="`dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives <a name="DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/data-sources/privatelink_endpoint_service_data_federation_online_archives mongodbatlas_privatelink_endpoint_service_data_federation_online_archives}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoint_service_data_federation_online_archives

dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/data-sources/privatelink_endpoint_service_data_federation_online_archives#project_id DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/data-sources/privatelink_endpoint_service_data_federation_online_archives#id DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/data-sources/privatelink_endpoint_service_data_federation_online_archives#project_id DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/data-sources/privatelink_endpoint_service_data_federation_online_archives#id DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoint_service_data_federation_online_archives

dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoint_service_data_federation_online_archives

dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoint_service_data_federation_online_archives

dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoint_service_data_federation_online_archives

dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/data-sources/privatelink_endpoint_service_data_federation_online_archives#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList">DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.results"></a>

```python
results: DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList">DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesConfig <a name="DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoint_service_data_federation_online_archives

dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/data-sources/privatelink_endpoint_service_data_federation_online_archives#project_id DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/data-sources/privatelink_endpoint_service_data_federation_online_archives#id DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/data-sources/privatelink_endpoint_service_data_federation_online_archives#project_id DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/data-sources/privatelink_endpoint_service_data_federation_online_archives#id DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResults <a name="DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResults.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoint_service_data_federation_online_archives

dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResults()
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList <a name="DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoint_service_data_federation_online_archives

dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference <a name="DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_privatelink_endpoint_service_data_federation_online_archives

dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.property.customerEndpointDnsName">customer_endpoint_dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.property.endpointId">endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResults">DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `customer_endpoint_dns_name`<sup>Required</sup> <a name="customer_endpoint_dns_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.property.customerEndpointDnsName"></a>

```python
customer_endpoint_dns_name: str
```

- *Type:* str

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResultsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResults
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchives.DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResults">DataMongodbatlasPrivatelinkEndpointServiceDataFederationOnlineArchivesResults</a>

---



